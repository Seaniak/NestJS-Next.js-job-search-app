import Layout from '../components/Layout';
import JobTemplate from '../layout/JobTemplate';
import { getCurrencySymbol } from '../utils/utils';
import { useContext } from 'react';
import { Store } from '../context/Store';
// import LoadingSpinnerPicture from '../img/spinner.svg';
// import HeaderBgPicture from '../img/business.jpg';

const Index = () => {
  const store = useContext(Store);
  let search = '';
  let location = '';

  const handleInputChange = async (e) => {
    e.preventDefault();
    let key = e.target.name;
    let val = e.target.value;

    if (key === 'search') search = val;
    if (key === 'location') location = val;


    if (key === 'Enter' || e.target.name === 'submit') {
      await store.searchJobs(search, location);
      return
    }
  }

  return (
    <Layout>
      <header>
        <div className="container">
          <h1>Job Search App</h1>
          <h2>Find your perfect job today!</h2>
          <form>
            <input onChange={(e) => handleInputChange(e)} type="text" className="form-control" placeholder="Job Title" name="search" />
            <input onChange={(e) => handleInputChange(e)} type="text" className="form-control" placeholder="Location" name="location" />
            <button name="submit" onClick={(e) => handleInputChange(e)} className="btn btn-primary btn-block">Search</button>
          </form>
        </div>
      </header>
      <main>
        <div className="container">
          <div className={store.showSpinner ? 'loading-spinner-start mt-5' : 'loading-spinner-stop mt-5'}>
            {<img src="/spinner.svg" alt="spinnerLogo" />}
          </div>
          <div className="result-container">
            {store.searchRes.length ? store.searchRes.map(job => <JobTemplate key={job.id} job={job} currency={getCurrencySymbol(job.currency)} />) : null}
          </div>
        </div>
      </main>
      <style jsx>{`
      header {
        padding: 50px;
        background-image: url("/business.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        height: 400px;
      }
          
      h2 {
        font-size: 1.2rem;
      }
        
      form {
        margin-top: 50px;
        max-width: 400px;
      }
      
      .card {
        margin: 20px 0;
      }
      
      .loading-spinner-start {
        width: 100px;
        height: 100px;
        margin: 0 auto;      
        display: block;
      }

      .loading-spinner-stop {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        display: none;
      }
      
      `}</style>
    </Layout>

  )
};

export default Index;