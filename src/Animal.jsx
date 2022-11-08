function Animal(props) {
  function local() {
    props.sayHi(`The ${props.description} ${props.type} says Hi`);
  }
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.type}</td>
      <td>{props.age}</td>
      <td>{props.description}</td>
      <td>
        <button onClick={local}>Greet</button>
      </td>
    </tr>
  );
}

export default Animal;
