import React, {Fragment} from 'react';

export default function HighOrderComponent() {
  return (
    <div>
      <SimpleWrapperComponent header="Заголовок">
        <h3>Содержимое</h3>
        <ol>
          <li>Первый</li>
          <li>Второй</li>
          <li>Третий</li>
        </ol>
      </SimpleWrapperComponent>
      <AdvancedWrapperComponent header={() => (<CustomHeader />)}>
        <h3>Содержимое</h3>
        <ul>
          <li>Первый</li>
          <li>Второй</li>
          <li>Третий</li>
        </ul>
      </AdvancedWrapperComponent>
    </div>
  );
}

function SimpleWrapperComponent(props: {header: string, children: any}) {
  return (
    <div>
      <h1>{props.header}</h1>
      <div>
        {props.children}
      </div>
    </div>
  );
}

function CustomHeader() {
  return (
    <Fragment>
      <span>Hello!</span>
      <strong>I'm custom header</strong>
      <sub>Small text</sub>
    </Fragment>
  )
}

function AdvancedWrapperComponent(props: {header: () => any, children: any}) {
  return (
    <div>
      <h1>{props.header()}</h1>
      <div>
        {props.children}
      </div>
    </div>
  )
}