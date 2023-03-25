const Button = (props) => {
  //  Write your code here.
  const { text, property } = props;
  return <Button class={property}>{text}</Button>;
};

const element = (
  //  Write your code here.second-button
  <div>
    <div class="bg-container">
      <h1 class="main-hedding">Social Butons</h1>
      <div class="button-container">
        <Button text="Like" property="first-button" />
        <Button text="Comment" property="" />
        <Button text="Share" property="third-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
