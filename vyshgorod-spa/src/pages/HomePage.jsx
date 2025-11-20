import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {

  return (
    <main>
      <header className="header_internal">
          <div>
            <Link to="/cabinet"><button>Перейти у власний кабінет</button></Link>
            <Link to="/register"><button>Зареєструватись</button></Link>
          </div>
      </header>

      <aside> 
          <h2>Навігація: </h2> 
          <ul> 
              <li><a href="#about" className="a_link">Про нас</a></li> 
              <li><a href="#leaders" className="a_link">Керівництво</a></li> 
              <li><Link to="/napryamy" className="a_link">Напрями діяльності</Link></li>
              <li><Link to="/feedback" className="a_link">Зворотній зв’язок</Link></li>
          </ul> 
      </aside>

      <article id="about">
        <h2>Мета створення установи</h2>
         <img src="img/vishgorodskiy_rayon-removebg-preview.png" alt="Будівля адміністрації" className="about-img" />
        <p>
            Районна адміністрація — це <span style={{color:'red'}}><i><b><u><em>важливий орган місцевої влади</em></u></b></i></span>,
            який відповідає за реалізацію державної політики у районі.
        </p>
        <p>Завдання адміністрації:</p>
        <ol start="7"> 
            <li>Забезпечення виконання законодавства України.</li>
            <li>Розвиток соціальної та економічної сфери району.</li>
            <li>Забезпечення прозорості діяльності органів влади.</li>
        </ol>
      </article>

      <article id="leaders" className="leaders">
        <h2 className="leaders__title">Керівництво установи</h2>
        <table className="leaders__table">
          <caption className="leaders__caption"><b>Інформація про керівників</b></caption>
          <thead className="leaders__thead">
            <tr>
              <th>Прізвище та ініціали</th><th>Посада</th><th>Досвід</th><th colSpan="2">Освіта</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="2">Іваненко І.І.</td>
              <td rowSpan="2">Голова адміністрації</td>
              <td>15 років</td>
              <td>КНУ ім. Т. Шевченка</td>
              <td>Державне управління</td>
            </tr>
            <tr>
              <td>Кандидат наук</td>
              <td colSpan="2">Публічне адміністрування</td>
            </tr>
            <tr>
              <td>Петренко П.П.</td>
              <td>Заступник голови</td>
              <td>10 років</td>
              <td colSpan="2">КНЕУ, Економіка</td>
            </tr>
            <tr>
              <td>Сидоренко С.С.</td>
              <td>Керівник апарату</td>
              <td>8 років</td>
              <td colSpan="2">КНУБА, Менеджмент</td>
            </tr>
            <tr>
              <td>Коваленко К.К.</td>
              <td>Начальник відділу</td>
              <td>5 років</td>
              <td colSpan="2">КПІ, Правознавство</td>
            </tr>
            <tr>
              <td>Мельник М.М.</td>
              <td>Завідувач сектору</td>
              <td>3 роки</td>
              <td colSpan="2">НАДУ, Публічне управління</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5">Дані актуальні станом на 2025 рік</td>
            </tr>
          </tfoot>
        </table>
      </article>

      <aside>
        <h3>Корисні посилання</h3>
        <nav>
          <ul>
            <li><Link to="/napryamy" className="a_link">Напрями діяльності</Link></li>
            <li><Link to="/feedback" className="a_link">Зворотній зв’язок</Link></li> 
            <li><a href="https://www.kmu.gov.ua" target="_blank" className="a_link">Кабінет Міністрів України</a></li>
            <li><a href="https://rada.gov.ua" target="_blank" className="a_link">Верховна Рада України</a></li>
          </ul>
        </nav>
      </aside>
    </main>
  );
}

export default HomePage;