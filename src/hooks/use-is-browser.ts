import { useEffect } from "react"

import useEnableOnce from "src/hooks/use-enable-once"

export const useIsBrowser = () => {
  const [isEnable, enableOnce] = useEnableOnce()
  useEffect(() => {
    enableOnce()
  }, [enableOnce])
  return isEnable
}
export default useIsBrowser
