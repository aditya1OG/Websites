import './portfoliolist.scss'

export default function Portfoliolist({id, title, active, setSelected}) {
  return (
    <li className={active ? "Portfoliolist active" : "Portfoliolist"} 
    onClick={() => setSelected(id)}>
        {title}
    </li>
  );
}
