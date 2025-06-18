import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './table.module.css';

export default function TablePage() {
  const dataUrl = useBaseUrl('/data/syntax.json');
  const [features, setFeatures] = React.useState([]);
  const [flavors, setFlavors] = React.useState([]);

  React.useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((json) => {
        setFeatures(json);
        const flavorSet = new Set();
        json.forEach((feat) => {
          Object.keys(feat.flavors).forEach((f) => flavorSet.add(f));
        });
        setFlavors(Array.from(flavorSet));
      });
  }, [dataUrl]);

  return (
    <Layout title="Markdown Syntax Matrix">
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
            {features.map((feat) => (
              <tr key={feat.name}>
                <td>
                  <strong>{feat.name}</strong>
                  <div className={styles.description}>{feat.description}</div>
                </td>
                {flavors.map((flavor) => {
                  const info = feat.flavors[flavor];
                  if (!info) {
                    return <td key={flavor}></td>;
                  }
                  return (
                    <td key={flavor}>
                      {info.syntax && (
                        <pre>
                          <code>{info.syntax}</code>
                        </pre>
                      )}
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