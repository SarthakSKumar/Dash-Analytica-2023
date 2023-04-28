import plotly.express as px
import plotly.graph_objects as go
import pandas as pd
import os


def plot_trend_hashtags(filename):
    df = pd.read_excel(r'C:\Users\sunil\Desktop\Electhon-2023\Maps\Datasets\hashtags' + filename)
    # assuming your dataframe is called `tweets_df` and has a column called 'sentiment'
    hashtag_name = os.path.splitext(filename)[0]
    # Convert created_at column to datetime format
    df['created_at'] = pd.to_datetime(df['created_at'])

    # Extract date and time columns
    df['date'] = df['created_at'].dt.date
    df['time'] = df['created_at'].dt.time

    # Group by date and count number of tweets per day
    tweets_per_day = df.groupby('date').size().reset_index(name='count')

    # Create a trace
    trace = go.Scatter(x=tweets_per_day['date'], y=tweets_per_day['count'], mode='lines')

    # Create a layout
    layout = go.Layout(title='Tweet Trends for ' + hashtag_name, xaxis=dict(title='Date'), yaxis=dict(title='Number of Tweets'))

    # Create a figure and plot it
    fig = go.Figure(data=[trace], layout=layout)
    fig.show()


plot_trend_hashtags("\\#KarnatakaElections.xlsx")
