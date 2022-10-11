import { useReducer } from "react"

export function useEnableOnce() {
  return useReducer(() => true, false)
}

export default useEnableOnce
