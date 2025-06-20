import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './table.module.css';

export default function TablePage() {
  const featuresUrl = useBaseUrl('/data/features.json');
  const flavorsUrl = useBaseUrl('/data/flavors.json');
  const supportUrl = useBaseUrl('/data/syntax.json');

  const [features, setFeatures] = React.useState([]);
  const [flavors, setFlavors] = React.useState([]);
  const [supportMap, setSupportMap] = React.useState({});

  React.useEffect(() => {
    Promise.all([
      fetch(featuresUrl).then((res) => res.json()),
      fetch(flavorsUrl).then((res) => res.json()),
      fetch(supportUrl).then((res) => res.json()),
    ]).then(([featuresData, flavorsData, supportData]) => {
      setFeatures(featuresData);
      setFlavors(flavorsData);
      const map = {};
      supportData.forEach((entry) => {
        map[entry.feature] = entry.flavors;
      });
      setSupportMap(map);
    });
  }, [featuresUrl, flavorsUrl, supportUrl]);

  return (
    <Layout title="Markdown Syntax comparison table">
      <div className={styles.container}>
        <table className={styles.matrix}>
          <thead>
            <tr>
              <th>Feature</th>
              {flavors.map((flavor) => (
                <th key={flavor.key}>{flavor.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feat) => (
              <tr key={feat.key}>
                <td>
                  <strong>{feat.title}</strong>
                  <div className={styles.description}>{feat.description}</div>
                </td>
                {flavors.map((flavor) => {
                  const info = supportMap[feat.key]?.[flavor.key];
                  if (!info) {
                    return <td key={flavor.key}></td>;
                  }
                  return (
                    <td key={flavor.key}>
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