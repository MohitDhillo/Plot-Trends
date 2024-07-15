import wretch from "wretch";
import AbortAddon from "wretch/addons/abort";

const createApiBase = async (apiRoot?: string) => {
  let apiBase = wretch(!apiRoot ? import.meta.env.VITE_API_ROOT : apiRoot);
  return apiBase;
};

const createApiBaseWithAbortController = async (
  abortController: AbortController,
  apiRoot?: string
) => {
  let apiBase = wretch(!apiRoot ? import.meta.env.VITE_API_ROOT : apiRoot)
    .addon(AbortAddon())
    .signal(abortController);
  return apiBase;
};

export { createApiBase, createApiBaseWithAbortController };
