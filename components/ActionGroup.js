
import Button from './Button'

export default function Action({ children }) {
  return (
    <div className="actions">
      {children}
      <style jsx>{`
        .actions {
          box-shadow: 0px -6px 0px 0px rgb(1 0 0 / 10%);
          border-radius: 14px;
          padding: 20px;
          background: var(--active-color);
          display: flex;
          width:calc(100% - 4rem);
          position:absolute;
          bottom:20px;
          left:2rem;
        }
      `}</style>
    </div>
  )
}