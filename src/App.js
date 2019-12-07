import React from 'react';
import FeedbackList from './components/FeedbackList';
import VideoStream from './components/VideoStream';
import PageBox from './layout/PageBox';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';

function App() {
  const feedbackList = [
      { id: '01', name: 'Jonas', datetime: 'YYYY-MM-DD', score: 1, text: 'komentaras kaip vertina Jonas'},
      { id: '02', name: 'Aldona', datetime: 'YYYY-MM-DD', score: -1, text: 'komentaras kaip vertina Aldona'},
    ];
  const eventId = 'WUWz6xmSzbk';
  return (
    <>
      <CssBaseline/>
      <div>
        <PageBox>
          <FeedbackList feedbackList={feedbackList}/>
        </PageBox>
        <PageBox>
          <VideoStream
            videoUrl={`https://www.youtube.com/embed/${eventId}?controls=0`}
          />
        </PageBox>
        <PageBox>Renginio rezultatai</PageBox>
      </div>
    </>
  );
}
export default App;
