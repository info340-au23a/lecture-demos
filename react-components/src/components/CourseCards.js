import React from 'react';

//represents ALL of the courses
export function CourseList(props){

  //DATA TO SHOW
  //starting: [{}, {}, {}]
  const courseData = [
    {"number": "INFO 340", "title": "Client Side Development", "img": "chrome-logo-150w.png"},
    {"number": "INFO 201", "title": "Foundational Skills for Data Science", "img": "rlogo-150w.png"},
    {"number": "INFO 443", "title": "Software Architecture", "img": "rockefeller-avatar-150w.png"},
    {"number": "INFO 448", "title": "Android Development", "img": "android-icon-150w.png"},
    {"number": "LIS 511", "title": "Introduction to Programming", "img": "python-logo-150w.png"}
  ] 

  //WHAT DOES THE DATA LOOK LIKE
  const elementArray = courseData.map((item) => {
    const element = <CourseCard courseObj={item} key={item.number} />;
    return element;
  });

  //want to show: [<>, <>, <>]
  // const elementArray = [
  //   <CourseCard courseObj={courseData[0]} />,
  //   <CourseCard courseObj={courseData[1]} />,
  //   <CourseCard courseObj={courseData[2]} />,
  //   <CourseCard courseObj={courseData[3]} />,
  // ]

  return (
    <div className="row collapse show">
      {elementArray}
    </div>
  )
}

//represents ONE course card
function CourseCard(props) {
  console.log(props);
  const {courseNum, courseTitle, currentlyTeaching} = props;

  const courseObj = props.courseObj;
  const {number, title, img} = courseObj;


  // const num = props.courseNum;
  // const title = props.courseTitle;
  // const current = props.currentlyTeaching;

  let classString = "card col-12 col-md-6 col-lg-4";
  if(currentlyTeaching) {
    classString = classString +" bg-warning"
  }

  return (
    <div className={classString}>
      <img src={"img/"+img} alt="course logo" />
      <h3>{number}: {title}</h3>
    </div>
  )
}