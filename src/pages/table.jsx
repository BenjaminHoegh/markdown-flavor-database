import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from './table.module.css';
import data from '@site/static/data/syntax.json';

export default function SyntaxTable() {
  const flavors = Object.keys(data[0].flavors);

  return (
    <Layout title="Syntax Table" description="Markdown syntax comparison">
      <div className={styles.tableWrapper}>
        <table className={styles.matrix}>
          <thead>
            <tr>
              <th>Feature</th>
              {flavors.map((flavor) => (
                <th key={flavor}>{flavor}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((feature) => (
              <tr key={feature.name}>
                <td>{feature.name}</td>
                {flavors.map((flavor) => {
                  const info = feature.flavors[flavor] || {};
                  return (
                    <td key={flavor}>
                      {info.supported && info.syntax && (
                        <pre>
                          <code>{info.syntax}</code>
                        </pre>
                      )}
                      {info.supported && !info.syntax && <span>✓</span>}
                      {info.notes && <small>{info.notes}</small>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
