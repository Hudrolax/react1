import './app-info.css';

function AppInfo(props) {
  const {total, increase} = props
  return (
    <div className='app-info'>
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {total}</h2>
      <h2>Премию получит: {increase}</h2>
    </div>
  );
}

export default AppInfo;
