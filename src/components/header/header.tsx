import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';
import logo from "../assets/companyLogo.png"


export default component$(() => {
  useStylesScoped$(styles);

  return (
      <header>
          <div class="p-5">
              <img src={logo} alt="company logo" width="60px"/>
          </div>
          <div></div>
      </header>
  );
});
