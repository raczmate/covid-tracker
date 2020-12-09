## Covid-tracker

A webalkalmazás a „Web-es rendszerek programozás 1.” tárgy beadandó feladataként készült el.
Az app kettő oldalból áll:
- Az adatok lekérése után a főoldalon landolunk `MainPage.js`
- Országkereső oldal `SecondPage.js`
Az ezek közötti navigációról a `React Router` gondoskodik.

### Header.js
A fejlécben jelzi az app hogy a kapott információk milyen frissek, a frissítést ki lehet kényszeríteni az "Adatok frissítése" gombra nyomva.

### MainPage.js
A főoldalon láthatunk napi új információkat a Covid-járvány helyzetére vonatkozóan.
Valamint a felhasználó lokációja is eltárolásra kerül localStorage-ben, így lejjebb tekerve az ő országáról kapott információkat is olvashatjuk.

### SecondPage.js
Az „Ország kiválasztása” lenyíló menüt megnyitva választhatjuk ki, mely országokról szeretnénk információkat kapni. A megjelenített országokat a menüben narancssárgával jelzi az app nekünk, újbóli kattintással törölhetjük a megjelenítésből a kiválasztott országot, vagy az „Alaphelyzetbe állítás” gombra nyomva törölhetjük az összes kiválasztott országot.

### API-k:
 - https://api.covid19api.com  Covid19 napi új esetek, elhalálozások, gyógyultak száma globálisan, vagy országokra lebontva.
- https://ipwhois.app/json/  A felhasználó helyének meghatározása céljából.

### StatContext.js
Az adatokat szolgáltatja a Card komponenseknek.
```javascript
import { createContext, useContext } from 'react';	
		
		const StatContext = createContext({
		  Countries: null,
		  Global: null,
		  Date: null,
		});
		
		export const useStats = () => useContext(StatContext);
		
		export default StatContext;
```


### DataCards.js
Feltételes renderelések sorozata, a `LocalCard`, `CountryCard` és `GlobalCard` komponensek használják fel.
A `LocalCard` a `localStorage`-ből kéri le azt az országot amelyben tartózkodik a felhasználó `(preferredCountry)`,
a `GlobalCard` az API globális adatait használja fel.
Példa response:
```json
{
  "Global": {
    "NewConfirmed": 100282,
    "TotalConfirmed": 1162857,
    "NewDeaths": 5658,
    "TotalDeaths": 63263,
    "NewRecovered": 15405,
    "TotalRecovered": 230845
  },
  ```

