import React, { useEffect, useRef, useState } from "react";
import {
  Chip,
  CircularProgress,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Typography,
  lighten,
} from "@mui/material";

import {
  type SymbolData,
  getSymbols as getSymbolsApi,
} from "@/services/symbol";

type SymbolAutocompleteProps = {
  label: string;
  value: string;
  error: boolean;
  helperText: string;
  variant: "filled" | "outlined" | "standard";
  excludeCrypto: boolean;
  required?: boolean;
  fullWidth?: boolean;
  name?: string;
  onChange: (value: string, isCrypto: boolean) => void;
  onDropdownItemClick?: (symbol: string) => void;
};

export default function SymbolAutocomplete({
  label,
  value,
  error,
  helperText,
  variant,
  excludeCrypto,
  required,
  fullWidth,
  name,
  onChange,
  onDropdownItemClick,
}: SymbolAutocompleteProps) {
  const [symbols, setSymbols] = useState<SymbolData[]>([]);
  const [symbolsLoading, setSymbolsLoading] = useState<boolean>(false);
  const [inputFocused, setInputFocused] = useState<boolean>(false);

  const anchorEl = useRef<HTMLDivElement | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const autoCompleteApiCallTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value, false);
    if (autoCompleteApiCallTimeoutRef.current) {
      window.clearTimeout(autoCompleteApiCallTimeoutRef.current);
    }
    if (value.length >= 2) {
      autoCompleteApiCallTimeoutRef.current = window.setTimeout(() => {
        getSymbols(value);
      }, 500);
    }
    if (!value.length) {
      setSymbols([]);
    }
  };

  const getSymbols = (query: string) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    setSymbolsLoading(true);
    getSymbolsApi(abortController, query, excludeCrypto)
      .then((symbols) => {
        setSymbolsLoading(false);
        setSymbols(symbols);
      })
      .catch(() => {
        setSymbolsLoading(false);
      });
  };

  const onClickSymbol = (symbol: SymbolData) => {
    onChange(symbol.symbol, symbol.isCrypto);
    onDropdownItemClick && onDropdownItemClick(symbol.symbol);
  };

  const onInputBlur = () => {
    if (autoCompleteApiCallTimeoutRef.current) {
      window.clearTimeout(autoCompleteApiCallTimeoutRef.current);
    }
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setInputFocused(false);
  };

  return (
    <React.Fragment>
      <TextField
        label={label}
        error={error}
        helperText={helperText}
        variant={variant}
        value={value}
        required={required}
        fullWidth={fullWidth}
        name={name}
        onChange={onChangeValue}
        ref={anchorEl}
        autoComplete="off"
        onKeyDown={(e) => {
          (e.key === "Escape" || e.key === "Enter") && setSymbols([]);
        }}
        onFocus={() => {
          setInputFocused(true);
        }}
        onBlur={() => {
          onInputBlur();
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {!!symbolsLoading && (
                <CircularProgress size={14} sx={{ color: "text.primary" }} />
              )}
            </InputAdornment>
          ),
        }}
      />
      <Menu
        anchorEl={anchorEl.current}
        open={symbols.length > 0 && inputFocused}
        onClose={() => {
          setSymbols([]);
        }}
        onClick={() => {
          setSymbols([]);
        }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              minWidth: anchorEl.current?.offsetWidth,
              maxHeight: 200,
              overflowY: "auto",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.12))",
              mt: 1,
              backgroundColor: (theme) =>
                lighten(theme.palette.background.default, 0.1),
            },
          },
        }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        autoFocus={false}
        disableAutoFocus
      >
        {symbols.map((x) => (
          <MenuItem
            key={x.id}
            sx={{ minHeight: "auto", justifyContent: "space-between" }}
            onClick={() => {
              onClickSymbol(x);
            }}
          >
            <Typography variant="body1">
              {x.name ?? `${x.name}:`} {x.symbol}
            </Typography>
            {!!x.isCrypto && (
              <Chip variant="filled" color="info" label="Crypto" size="small" />
            )}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}
