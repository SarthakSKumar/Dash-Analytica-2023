import plotly.express as px
import plotly.graph_objects as go
import pandas as pd

df = pd.read_excel(r"C:\Users\sunil\Desktop\Electhon-2023\Maps\Datasets\tweets_data.xlsx")
df_new = df.groupby(['username']).mean().reset_index().drop(['id', 'user_id', 'retweet', 'video'], axis=1)
print(df_new.columns)
values = df_new.loc[df_new.username == 'ceo_karnataka'].values

fig = go.Figure(go.Bar(
    x=[values[0][1], values[0][2], values[0][3]],
    y=["Average Replies", "Average Retweets", "Average likes"],
    orientation='h', marker=dict(color='#00acee')))

fig.update_layout(barmode='stack', yaxis={'categoryorder': 'total ascending'})
fig.update_traces(marker_line_width=0, texttemplate='%{value:.2f}')
fig.layout.update(title='Analysis on the handle: ' + values[0][0], font=dict(size=22))  # updating layout and title
fig.show()
