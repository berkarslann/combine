import React from "react";
import "./styles.css";
import eyes from "../../assets/eyes.png";

const CommentCarousel = () => {
  return (
    <div className="void" id="void">
      <div className="crop">
        <ul id="card-list" style={{ "--count": 6 }}>
          <li>
            <div className="card">
              <a href="">
                <span className="model-name">Zeynep A</span>
                <span>
                  Combine benim için harika bir deneyimdi! Proje takımına
                  katılmak istiyordum ve bu platform sayesinde buldum
                </span>
              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="">
                <span className="model-name">Can B.</span>
                <span>
                  Üniversitede proje deneyimlerimi artırmak istiyordum ve
                  Combine bunu mümkün kıldı
                </span>
              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="">
                <span className="model-name">Elif C.</span>
                <span>
                  Combine sayesinde farklı becerilere sahip ekip arkadaşlarıyla
                  tanışma şansım oldu
                </span>
              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="">
                <span className="model-name">Mehmet Y.</span>
                <span>Kendi projemi başlatmak için mükemmel bir yer</span>
              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="">
                <span className="model-name">Ayşe K.</span>
                <span>
                  Projelere katılarak hem deneyim kazanıyorum hem de yeni
                  arkadaşlar ediniyorum. Kesinlikle tavsiye ederim
                </span>
              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="">
                <span className="model-name">Ali K.</span>
                <span>
                  gerçek dünya projelerinde yer alıyorum ve öğrenme sürecim hiç
                  olmadığı kadar hızlandı
                </span>
              </a>
            </div>
          </li>
        </ul>
        {/* <div className="last-circle"></div>
        <div className="second-circle"></div> */}
      </div>

      <div className="mask"></div>
      <div className="center-circle">
        <img
          src={eyes}
          alt="Description of the image"
          style={{ width: "80%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default CommentCarousel;
