import React from 'react';

import './style.css';

export default function Battle() {
  return (
    <div className="battle_wrapper">

<div className="title_wrapper">batalha <span>de bandas</span></div>
      <div className="battle_container">
        <div className="box_battle">
        

          <div className="adversary_wrapper">
            <div className="band_container">
              <div className="date_wrapper">
              <div className="date"><span>22:00hs</span></div>
              <div className="addres">Bar Top 5282</div>
              </div>
              <div className='strem'>live</div>
              <div className="logo_band"></div>
              <div className="banda_name">Sorriso Maroto</div>
            </div>


            <div className="result_wrapper">vs</div>

            <div className="band_container">
              <div className="date_wrapper">
              <div className="date"><span>22:00hs</span></div>
              <div className="addres">Bar Top 5282</div>
              </div>
              <div className='strem'>live</div>
              <div className="logo_band"></div>
              <div className="banda_name">Ferrugem</div>
            </div>
          </div>
          

        </div>


      </div>

    </div>
  );
}
