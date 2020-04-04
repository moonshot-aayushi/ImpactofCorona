import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName="Preventive Measures">
      <Helmet>
        <title>Safeguard from Corona Virus</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>Preventive Measures for Corona Virus</h1>
        <p>The ongoing pandemic of the Corona Virus has instilled distrest in every individual.
        It is our responsibility to break the chain of spreading the virus leading to flattening the curve.</p>
        <h1>STAY HOME. SAVE LIVES.</h1>
        <h4>Help stop coronavirus</h4>
        <div class="div1">
                <ol class="ol1" type="1">
        <li  class="li"> STAY Home</li>
        <li  class="li">KEEP a safe distance</li>
        <li class="li">WASH hands often</li>
        <li class="li">COVER your cough</li>
        <li class="li">SICK? Call the helpline</li>
        </ol>
        </div>
       <p>There’s currently no vaccine to prevent coronavirus disease (COVID-19).</p>
      <p>You can protect yourself and help prevent spreading the virus to others if you:</p>
      <div class="div2">
      <ul type="none">

      <li><b>DO</b></li>
      <ul class ="u1" type="disc">
      <li class="li1">Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub.</li>
      <li class="li1">Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze.</li>
      <li class="li1">Avoid close contact (1 meter or 3 feet) with people who are unwell.</li>
      <li class="li1">Stay home and self-isolate from others in the household if you feel unwell.</li>
      </ul>
      <br></br><br></br>
      
      <li><b>DON'T</b></li>
      <ul class="u1" type="disc">
      <li class="li1">Touch your eyes, nose, or mouth if your hands are not clean.</li>
      </ul>
      
      </ul>
      </div>
      </Container>
    </Layout>
  );
};

export default SecondPage;
