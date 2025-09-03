import React from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftEllipsisIcon as ChatSolidIcon } from '@heroicons/react/24/solid'
import Button from '@/app/components/base/button'
import type { ConversationItem } from '@/types/app'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const MAX_CONVERSATION_LENTH = 20

export type ISidebarProps = {
  copyRight: string
  currentId: string
  onCurrentIdChange: (id: string) => void
  list: ConversationItem[]
}

const Sidebar: FC<ISidebarProps> = ({
  copyRight,
  currentId,
  onCurrentIdChange,
  list,
}) => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'

  return (
    <div
      className={classNames(
        'shrink-0 flex flex-col overflow-y-auto border-l border-gray-200',
        'bg-gradient-to-b from-white via-gray-50 to-white',
        'pc:w-[244px] tablet:w-[192px] mobile:w-[240px]',
        'tablet:h-[calc(100vh_-_3rem)] mobile:h-screen',
        isRTL ? 'text-right' : 'text-left',
      )}
    >
      {/* New Chat Button */}
      {list.length < MAX_CONVERSATION_LENTH && (
        <div className="flex p-4 pb-0">
          <Button
            onClick={() => onCurrentIdChange('-1')}
            className="group w-full flex items-center justify-center gap-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition-colors text-sm h-9"
          >
            <PencilSquareIcon className="h-4 w-4" />
            {t('app.chat.newChat')}
          </Button>
        </div>
      )}

      {/* Conversation List */}
      <nav className="mt-4 flex-1 space-y-2 px-4 pb-6">
        {list.map((item) => {
          const isCurrent = item.id === currentId
          const ItemIcon = isCurrent ? ChatSolidIcon : ChatBubbleOvalLeftEllipsisIcon

          return (
            <div
              key={item.id}
              onClick={() => onCurrentIdChange(item.id)}
              className={classNames(
                'flex items-center cursor-pointer px-3 py-2 rounded-lg shadow-sm transition-all duration-150 group',
                isCurrent
                  ? 'bg-primary-50 text-primary-700 ring-1 ring-primary-200'
                  : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200',
              )}
            >
              <ItemIcon
                className={classNames(
                  isRTL ? 'ml-3' : 'mr-3',
                  'h-5 w-5 flex-shrink-0',
                  isCurrent ? 'text-primary-600' : 'text-gray-400 group-hover:text-primary-500',
                )}
                aria-hidden="true"
              />
              <span className="truncate font-medium">{item.name}</span>
            </div>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-100 text-xs text-gray-400">
        © {copyRight} {new Date().getFullYear()}
      </div>
    </div>
  )
}

export default React.memo(Sidebar)
