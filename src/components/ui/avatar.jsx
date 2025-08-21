import React from 'react'
export const Avatar = ({ className='', children }) => <div className={`relative overflow-hidden rounded-full bg-[rgb(var(--accent)/0.1)] ${className}`}>{children}</div>
export const AvatarImage = ({ src, alt }) => <img src={src} alt={alt} className="h-full w-full object-cover" />
export const AvatarFallback = ({ children }) => <div className="flex h-full w-full items-center justify-center text-sm">{children}</div>
