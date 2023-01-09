import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';
import  logo  from "../../assets/companyLogo.png"


export default component$(() => {
  useStylesScoped$(styles);

  return (
      <header>
          <div>
              <img src={logo} alt="company logo" width="60px"/>
          </div>
          <div></div>
      </header>
  );
});
