const TypewritingBox = ({ message }) => {
  return (
    <p key={message} className="typed-out">
      {message}
    </p>
  );
};

export default TypewritingBox;
