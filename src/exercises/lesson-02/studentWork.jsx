//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
import SnackHeader from './SnackHeader.jsx';
import SnackFooter from './SnackFooter.jsx';
import SnackList from './SnackList.jsx';

export default function StudentWork() {
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightblue' }}>
      <SnackHeader />
      <SnackList />
      <SnackFooter />
    </div>
  );
}
