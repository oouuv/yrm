import { Link } from 'react-router-dom';
import { instantRules1, instantRules2, starterRules, yrmHighlights, yrmQuickInfo } from '../data/yrmRules';

function RulesTable({ table }) {
  return (
    <section className="rules-panel">
      <header>
        <h3>{table.title}</h3>
        <p>{table.period}</p>
      </header>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {table.columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, idx) => (
                  <td key={`${row[0]}-${idx}`}>
                    {String(cell).startsWith('https://') ? (
                      <a href={cell} target="_blank" rel="noreferrer">{cell}</a>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function YrmRulesPage() {
  return (
    <div className="rules-page">
      <section className="hero-card">
        <p className="eyebrow">YRM RULES</p>
        <h1>YRM 规则与出金机制总览</h1>
      </section>

      <section className="tips-card">
        <h2>重点说明</h2>
        <ul>
          {yrmHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <RulesTable table={starterRules} />
      <RulesTable table={instantRules1} />
      <RulesTable table={instantRules2} />

     
    </div>
  );
}

export default YrmRulesPage;
