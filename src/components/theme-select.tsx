import { useTheme } from "next-themes"
import { useEffect, Fragment, FC } from "react"

import useEnableOnce from "src/utils/hooks/use-enable-once"

import Select, {
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectCheckIcon,
  SelectChevronDownIcon,
  SelectChevronUpIcon,
  SelectViewport,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectLabel,
  SelectSeparator,
  SelectGroup,
} from "src/ui/select"
import { themeValues } from "src/ui/stitches.config"

const CLASSIC_THEMES = ["light", "dark", "system"]

const ThemeSelect: FC<{ className?: string }> = ({ className }) => {
  const [isEnable, enableOnce] = useEnableOnce()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    enableOnce()
  }, [enableOnce])
  if (isEnable === false) return null

  return (
    <Select onValueChange={(newValue) => setTheme(newValue)} value={theme}>
      <SelectTrigger className={className} aria-label="Theme">
        <SelectValue placeholder="Select a theme" />
        <SelectIcon>
          <SelectChevronDownIcon />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton>
          <SelectChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport>
          <SelectGroup>
            <SelectLabel>Classic</SelectLabel>
            {CLASSIC_THEMES.map((t) => (
              <SelectItem key={t} value={t}>
                <SelectItemIndicator>
                  <SelectCheckIcon />
                </SelectItemIndicator>
                <SelectItemText>{t}</SelectItemText>
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Other</SelectLabel>
            {Object.keys(themeValues)
              .filter((t) => CLASSIC_THEMES.includes(t) === false)
              .map((t) => {
                return (
                  <Fragment key={t}>
                    <SelectItem value={t}>
                      <SelectItemIndicator>
                        <SelectCheckIcon />
                      </SelectItemIndicator>
                      <SelectItemText>{t}</SelectItemText>
                    </SelectItem>
                  </Fragment>
                )
              })}
          </SelectGroup>
        </SelectViewport>
        <SelectScrollDownButton>
          <SelectChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </Select>
  )
}

export default ThemeSelect
