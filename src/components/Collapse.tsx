import {ReactElement, useState} from "react";

interface CollapseProps {
  collapsedLabel?: string,
  expandedLabel?: string,
  children: ReactElement | string
}

function Collapse({
                    collapsedLabel = 'Развернуть',
                    expandedLabel = 'Свернуть',
                    children
                  }: CollapseProps) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const onClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div>
      <p>
        <button
          className='collapse-btn'
          type='button'
          onClick={onClick}
          aria-expanded={isCollapsed}
        >{isCollapsed ? collapsedLabel : expandedLabel}</button>
      </p>
      <div className={`collapse-content ${!isCollapsed && 'expanded'}`}>
        {children}
      </div>
    </div>
  )
}

export default Collapse
