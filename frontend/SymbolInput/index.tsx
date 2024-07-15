import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import {
  Collapse,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  lighten,
  type SelectChangeEvent,
  FormHelperText,
  Typography,
  Chip,
  Stack,
  Paper,
  Button,
  CircularProgress,
  InputAdornment,
  Box,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

import { getCryptoExchanges } from "@/services/symbol";
import {
  symbolCryptoExchangesAtom,
  addNotificationAtom,
} from "@/lib/jotai/atoms";
import SymbolAutocomplete from "@/components/SymbolAutocomplete";
import { type MultipleSymbolResponse } from "@/services/symbol";

const BENCHMARK_INDEXES = ["SPY", "QQQ"];

export type SymbolInputValue = {
  symbol: string;
  exchange: string;
};

export type SymbolInputError = {
  symbol?: string;
  exchange?: string;
  nonFieldErrors?: string[];
};

type SymbolInputProps = {
  id: string;
  value: SymbolInputValue;
  label: string;
  error: SymbolInputError;
  variant: "filled" | "outlined" | "standard";
  excludeCrypto?: boolean;
  showIndexes?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  name?: string;
  multipleSymbolResponse?: MultipleSymbolResponse;
  onChange: (id: string, value: SymbolInputValue) => void;
  onBlur?: () => void;
  onDropdownItemClick?: () => void;
};

export default function SymbolInput({
  excludeCrypto = false,
  showIndexes = false,
  multipleSymbolResponse,
  value,
  onBlur,
  ...props
}: SymbolInputProps) {
  const [showExchangeDropdown, setShowExchangeDropdown] = useState<boolean>(
    Boolean(value.exchange)
  );
  const [isExchangesLoading, setIsExchangesLoading] = useState<boolean>(false);

  const [symbolCryptoExchanges, setSymbolCryptoExchanges] = useAtom(
    symbolCryptoExchangesAtom
  );
  const [_notification, addNotification] = useAtom(addNotificationAtom);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const fetchSymbolsExchanges = (symbol: string) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    setIsExchangesLoading(true);
    getCryptoExchanges(abortController, symbol)
      .then((value) => {
        setIsExchangesLoading(false);
        setSymbolCryptoExchanges([...symbolCryptoExchanges, value]);
      })
      .catch(() => {
        setIsExchangesLoading(false);
        addNotification({
          message: "Error fetching exchanges for selected symbol",
          severity: "error",
        });
      });
  };

  const onSymbolAutocompleteChange = (symbol: string, isCrypto: boolean) => {
    props.onChange(props.id, {
      symbol,
      exchange: "",
    });
    if (
      isCrypto &&
      !symbolCryptoExchanges.some(
        (x) => x.symbol.toLowerCase() === symbol.toLowerCase()
      )
    ) {
      fetchSymbolsExchanges(symbol);
    }
    setShowExchangeDropdown(isCrypto);
  };

  const onCryptoExchangeChange = (e: SelectChangeEvent) => {
    props.onChange(props.id, {
      symbol: value.symbol,
      exchange: e.target.value,
    });
  };

  const onClickIndex = (symbol: string) => {
    props.onChange(props.id, {
      symbol,
      exchange: "",
    });
    setShowExchangeDropdown(false);
  };

  const onClickUseOtherSymbol = (symbol: string) => {
    props.onChange(props.id, {
      symbol,
      exchange: "",
    });
    if (
      !symbolCryptoExchanges.some(
        (x) => x.symbol.toLowerCase() === symbol.toLowerCase()
      )
    ) {
      fetchSymbolsExchanges(symbol);
    }
    setShowExchangeDropdown(true);
  };

  return (
    <Box
      onBlur={() => {
        onBlur && onBlur();
      }}
    >
      <SymbolAutocomplete
        {...props}
        excludeCrypto={excludeCrypto}
        value={value.symbol}
        error={
          Boolean(props.error.symbol) ||
          Boolean(props.error.nonFieldErrors?.length)
        }
        helperText={props.error.symbol?.length ? props.error.symbol : ""}
        onChange={onSymbolAutocompleteChange}
        onDropdownItemClick={props.onDropdownItemClick}
      />
      <Collapse in={showExchangeDropdown} unmountOnExit>
        <FormControl
          fullWidth
          error={
            Boolean(props.error.exchange) ||
            Boolean(props.error.nonFieldErrors?.length)
          }
        >
          <InputLabel>Crypto Exchange</InputLabel>
          <Select
            value={value.exchange}
            label="Crypto Exchange"
            onChange={onCryptoExchangeChange}
            MenuProps={{
              slotProps: {
                paper: {
                  elevation: 0,
                  sx: {
                    maxHeight: 200,
                    overflowY: "auto",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.12))",
                    mt: 1,
                    backgroundColor: (theme) =>
                      lighten(theme.palette.background.default, 0.1),
                  },
                },
              },
            }}
            inputProps={{
              IconComponent: !isExchangesLoading ? ArrowDropDown : null,
            }}
            endAdornment={
              <InputAdornment position="end">
                {!!isExchangesLoading && (
                  <CircularProgress size={14} sx={{ color: "text.primary" }} />
                )}
              </InputAdornment>
            }
          >
            {symbolCryptoExchanges
              .find(
                (x) => x.symbol.toLowerCase() === value.symbol.toLowerCase()
              )
              ?.exchanges.map((x, i) => (
                <MenuItem key={i} value={x}>
                  {x}
                </MenuItem>
              ))}
          </Select>
          {!!props.error.exchange?.length && (
            <FormHelperText>{props.error.exchange}</FormHelperText>
          )}
        </FormControl>
      </Collapse>
      {showIndexes && (
        <Stack direction="row" spacing={1} justifyContent="flex-end">
          {BENCHMARK_INDEXES.map((x, i) => (
            <Chip
              size="small"
              key={i}
              label={x}
              onClick={() => {
                onClickIndex(x);
              }}
            />
          ))}
        </Stack>
      )}
      {!!multipleSymbolResponse && (
        <Collapse in={Boolean(multipleSymbolResponse)} unmountOnExit>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Stack flex={1} spacing={1}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", md: "center" }}
              >
                <Typography variant="subtitle2">Symbol Used</Typography>
                <Typography variant="subtitle1">
                  {multipleSymbolResponse.symbolUsed.name}:
                  {multipleSymbolResponse.symbolUsed.symbol}
                </Typography>
              </Stack>
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", md: "center" }}
              >
                <Typography variant="subtitle2">
                  Other possible value
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  width={{ xs: "100%", md: "auto" }}
                  spacing={2}
                >
                  <Typography variant="subtitle1">
                    {multipleSymbolResponse.otherSymbol.name}:
                    {multipleSymbolResponse.otherSymbol.symbol}
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    color="success"
                    onClick={() => {
                      onClickUseOtherSymbol(
                        multipleSymbolResponse.otherSymbol.symbol
                      );
                    }}
                  >
                    Use this
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        </Collapse>
      )}
      {!!props.error.nonFieldErrors?.length &&
        props.error.nonFieldErrors.map((x, i) => (
          <Typography
            variant="caption"
            color="error.main"
            key={i}
            ml={1.75}
            component="p"
            mt={-1.5}
          >
            {x}
          </Typography>
        ))}
    </Box>
  );
}
