const JobTemplate = (props) =>
  <div className="card mt-3 mb-3">
    <div className="card-body">
      <h4 className="card-title">{props.job.title} up to {props.currency}{props.job.salary_max}</h4>
      <h5>{props.job.location.display_name}</h5>
      <p className="card-text">{props.job.description}</p>
      <a href="{job.redirect_url}" target="_blank">View Job</a>
    </div>
  </div>;

export default JobTemplate;