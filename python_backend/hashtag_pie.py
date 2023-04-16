import plotly.express as px
import plotly.graph_objects as go
import pandas as pd
import os

def plot(filename):
  df = pd.read_excel(r"/Users/onepiece/Documents/Projects/Electhon-2023/Maps/Datasets/hashtags/"+filename)
  # assuming your dataframe is called `tweets_df` and has a column called 'sentiment'
  sentiment_counts = df['Sentiment'].value_counts()
  hashtag_name = os.path.splitext(filename)[0]

  fig = px.pie(
      values=sentiment_counts.values,
      names=sentiment_counts.index,
      title='Sentiment Proportions for '+hashtag_name,
      color_discrete_map={
          'Positive': 'green',
          'Neutral': '#87CEFA',
          'Negative': 'red'
      }
  )
  fig.show()

plot("#KarnatakaElections.xlsx")