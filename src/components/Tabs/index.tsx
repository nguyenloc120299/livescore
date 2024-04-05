'use client'

import TabLabel from './TabLabel'

interface Props {
  baseHref: string
  currentTab: string | undefined | null
  tabs: Array<{ title: string; tab: string | null;  }>
  className?: string
  tabQsKey?: string
  classTabLabel?: string
  customClassActive?: string

}

const Tabs: React.FC<Props> = ({
  baseHref,
  currentTab,
  tabs,
  tabQsKey = 'tab',
  className,
  classTabLabel,
  customClassActive
}) => {
  const allTabs = tabs.filter((item) => !item.tab).map((item) => item.tab)
  return (
    <>
      <div className={className}>
        <div className='flex gap-[4rem] t:gap-[15rem]'>
          {tabs.map((item, index) => (
            <TabLabel
              key={index}

              customClassActive={customClassActive}
              label={item.title}
              selected={
                item.tab
                  ? item.tab === currentTab
                  : currentTab === undefined || allTabs.includes(currentTab)
              }
              classTabLabel={classTabLabel}
              href={`${baseHref}${item.tab ? `?${tabQsKey}=${item.tab}` : ''}`}
            />
          ))}
        </div>
      </div>
   
    </>
  )
}

export default Tabs
