import Image from 'next/image';
import logoWhite from '../public/Untitled_Artwork copy 2.png';
import styles from './page.module.scss';

export default function Footer() {
  return (
    <section className={styles.sectionStyled}>
      <div className={styles.divOneStyled}>
        <div className={styles.divTwoStyled}>
          <div className={styles.divThreeStyled}>
            {/* Remove this when you found the logo svg  */}
            <span>Lowkey 3D</span>
            <p>
              3D technology represents the cutting edge of multimedia marketing.
              Improvements in image capturing and modeling, virtual showrooms,
              and computer vision will make VR and AR more efficient and more
              effective. These trends will help make 3D a critical part of
              future eCommerce. Use 3D Visualization solutions to transform your
              2D product images into interactive shopping experiences that lead
              to increased sales.
            </p>
            <button>
              <Image src={logoWhite} alt="logo white" width="28" height="28" />
              <span>Start live chat</span>
            </button>
          </div>
          <div className={styles.divFourStyled}>
            <div className={styles.divFiveStyled}>
              <p>Links</p>
              <ul>
                <li>
                  <a>Affiliate </a>
                </li>
                <li>
                  <a>Dashboard </a>
                </li>
                <li>
                  <a>Login </a>
                </li>
                <li>
                  <a>Sign up </a>
                </li>
                <li>
                  <a>Reset password </a>
                </li>
                <li>
                  <a>Redeem card </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.divFourStyled}>
            <div className={styles.divFiveStyled}>
              <p>Legal</p>
              <ul>
                <li>
                  <a>Terms & Conditions </a>
                </li>
                <li>
                  <a>Privacy Policy </a>
                </li>
                <li>
                  <a>Sub-processors </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.divFourStyled}>
            <div className={styles.divFiveStyled}>
              <p>For</p>
              <ul>
                <li>
                  <a>Artists </a>
                </li>
                <li>
                  <a>Business </a>
                </li>
                <li>
                  <a>E-commerce </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.divFourStyled}>
            <div className={styles.divFiveStyled}>
              <p>Packs</p>
              <ul>
                <li>
                  <a>Linkedin </a>
                </li>
                <li>
                  <a>A.I </a>
                </li>

                <li>
                  <a>Fantasy </a>
                </li>
                <li>
                  <a>Background </a>
                </li>
                <li>
                  <a>Video Games </a>
                </li>
                <li>
                  <a>Realistic </a>
                </li>
                <li>
                  <a>Instagram </a>
                </li>
                <li>
                  <a>Animation </a>
                </li>

                <li>
                  <a>Wallpaper </a>
                </li>

                <li>
                  <a>Anime </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className={styles.lineBreakStyled} />
        <div className={styles.divSixStyled}>
          <p>© Copyright 2023, All Rights Reserved by Lowkey3Dfx </p>
        </div>
      </div>
    </section>
  );
}
