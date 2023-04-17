import simplekml
import json

with open('output.geojson') as f:
    data = json.load(f)

kml = simplekml.Kml()

# Create legend for voter turnout colors
legend = """
<table>
 <tr><td colspan="2">Map Legend</td></tr>
    <tr><td style="background-color: #00FF00; color: #00FF00">---</td><td>Voter Turnout > 80%</td></tr>
    <tr><td style="background-color: #a0d600; color: #a0d600">---</td><td>60% < Voter Turnout <= 80%</td></tr>
    <tr><td style="background-color: #d7a700; color: #D7A700">---</td><td>40% < Voter Turnout <= 60%</td></tr>
    <tr><td style="background-color: #f66d00; color: #F66D00">---</td><td>20% < Voter Turnout <= 40%</td></tr>
    <tr><td style="background-color: #ff0000; color: #FF0000">---</td><td>0% < Voter Turnout <= 20%</td></tr>
</table>
"""

for feature in data["features"]:
    p = feature["properties"]
    g = feature["geometry"]
    c = g["coordinates"][0]

    poly = kml.newpolygon()
    coords = []

    for coord in c:
        if all(val is not None for val in coord):
            if len(coord) == 2:
                lon, lat = coord
            elif len(coord) == 1:
                lon, lat = coord[0], None
            coords.append((lon, lat))

    poly.outerboundaryis = coords

    hex_val = p["fill"][1:]
    if len(hex_val) >= 6:
        red = hex_val[0:2]
        green = hex_val[2:4]
        blue = hex_val[4:6]
        kml_color_fill = f'60{blue}{green}{red}'
        kml_color_line = f'ee{blue}{green}{red}'
        style = simplekml.Style()
        style.linestyle.width = 0.5
        style.linestyle.color = kml_color_line
        style.polystyle.color = kml_color_fill

        shadow_style = simplekml.Style()
        shadow_style.polystyle.color = 'ff000000'
        shadow_style.polystyle.outline = 0

        # Add shadow to polygon
        poly.gxaltitudemode = 'clampToGround'
        poly.draworder = 100
        poly.style = style
        poly.extendeddata.newdata(name='gx:shadow', value=shadow_style)

        # Add BalloonStyle to polygon
        balloon = simplekml.BalloonStyle()
        balloon.bgcolor = simplekml.Color.white
        balloon.text = f'<b>{p["PS_Name"]}</b><br>{p["AC_Name"]}<br><br><table><tr><td><b>PS Code:</b></td><td>{p["PSCode"]}</td></tr><tr><td><b>AC Code:</b></td><td>{p["AC_CODE"]}</td></tr><tr><td><b>Registered Voters:</b></td><td>{p["registered_voters"]}</td></tr><tr><td><b>Total Votes:</b></td><td>{p["total_votes"]}</td></tr><tr><td><b>Voter Turnout:</b></td><td>{p["voter_turnout"]}%</td></tr></table><br><br>{legend}'
        style.balloonstyle = balloon

        poly.extendeddata.newdata(name='gx:shadow', value=shadow_style)
    else:
        print("Error: Invalid hex value for feature")

    name = p.get("PS_Name", "N/A").strip()
    code = p.get("PSCode", "N/A").strip()
    ac_code = p.get("AC_CODE", "N/A").strip()
    ac_name = p.get("AC_Name", "N/A").strip()
    reg_voters = p.get("registered_voters", "N/A").strip()
    tot_votes = p.get("total_votes", "N/A").strip()
    voter_turnout = p.get("voter_turnout", "N/A").strip()

    ward_name = p.get("ward_name", "N/A")
    ward_name = ward_name.strip() if ward_name else "N/A"

    locality = p.get("locality", "N/A")
    locality = locality.strip() if locality else "N/A"

    ward_id = p.get("ward_id", "N/A")
    ward_id = ward_id.strip() if ward_id else "N/A"

    poly.name = f"{ac_name} {code}"
    poly.description = f"{code}"
    poly.extendeddata.newdata(name="PSCode", value=code)
    poly.extendeddata.newdata(name="AC_CODE", value=ac_code)
    poly.extendeddata.newdata(name="registered_voters", value=reg_voters)
    poly.extendeddata.newdata(name="total_votes", value=tot_votes)
    poly.extendeddata.newdata(name="voter_turnout", value=voter_turnout)
    poly.extendeddata.newdata(name="Ward Name", value=ward_name)
    poly.extendeddata.newdata(name="Locality", value=locality)


kml.save('data.kml')
