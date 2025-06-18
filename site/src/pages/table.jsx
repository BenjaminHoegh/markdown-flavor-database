import React from 'react';
import Layout from '@theme/Layout';
import data from '@site/static/data/syntax.json';
import styles from './table.module.css';

export default function TablePage() {
  const flavors = Object.keys(data[0]?.flavors || {});
  return (
    <Layout title="Syntax Table">
      <div className={styles.container}>
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
                <th>{feature.name}</th>
                {flavors.map((flavor) => {
                  const cell = feature.flavors[flavor] || {};
                  return (
                    <td key={flavor}>
                      {cell.supported && (
                        <>
                          {cell.syntax && (
                            <pre>
                              <code>{cell.syntax}</code>
                            </pre>
                          )}
                          {cell.notes && <small>{cell.notes}</small>}
                        </>
                      )}
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
