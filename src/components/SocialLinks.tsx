import { IconKey, IconLink, iconMap } from '@/components'
import { ICON_DISPLAY_TYPE } from '@/data'

type LinkItem = {
  label: string
  href: string
  external: boolean
  icon: IconKey
}

type Props = {
  items: readonly LinkItem[]
  variant?: keyof typeof ICON_DISPLAY_TYPE
  iconSize?: number
}

export function SocialLinks({
  items,
  variant = ICON_DISPLAY_TYPE.iconLabel,
  iconSize = 18,
}: Props) {
  return (
    <div className="flex gap-4">
      {items.map((item) => {
        const Icon = iconMap[item.icon]
        const external = Boolean(item.external)

        return (
          <IconLink
            key={item.label}
            label={item.label}
            href={item.href}
            target={external ? '_blank' : '_self'}
            rel={external ? 'noopener noreferrer' : undefined}
            className={variant === ICON_DISPLAY_TYPE.iconOnly ? 'px-2' : ''}
          >
            <Icon aria-hidden="true" focusable="false" size={iconSize} />
            {variant === ICON_DISPLAY_TYPE.iconLabel && (
              <span className="text-sm">{item.label}</span>
            )}
          </IconLink>
        )
      })}
    </div>
  )
}
