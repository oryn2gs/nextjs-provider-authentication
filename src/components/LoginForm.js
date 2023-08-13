import { signIn } from "next-auth/react";

import styles from "../styles/LoginForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleSocialAuth = (e) => {
    e.preventDefault();

    const { id } = e.target;

    switch (id) {
      case "google":
        signIn("google", { callbackUrl: "/" });
        break;
      case "github":
        signIn("github", { callbackUrl: "/" });
        break;
      default:
        break;
    }
  };

  return (
    <form className={styles["login-form"]} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className={styles["form-set"]}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className={styles["form-set"]}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className={styles.buttons}>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
        <button className={styles.btn} id="google" onClick={handleSocialAuth}>
          <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
        </button>
        <button className={styles.btn} id="github" onClick={handleSocialAuth}>
          <FontAwesomeIcon icon={faGithub} /> Signin with Github
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
