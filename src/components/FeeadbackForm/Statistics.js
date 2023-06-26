export default function Statistics(props) {
  // const { good, neutral, bad, total, positivePercentage } = props;
  const arrOfKeys = Object.keys(props);

  return (
    <ul>
      {arrOfKeys.map(key => {
        return (
          <li key={key}>
            <span>{key}</span>
            <span>{props[key]}</span>
          </li>
        );
      })}
    </ul>
  );
}
