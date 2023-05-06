import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Store() {
  const [stores, setStores] = React.useState([]);

  React.useEffect(() => {
    const fetchStores = async () => {
      const response = await fetch("http://localhost:5000/stores");
      const data = await response.json();
      setStores(data);
    };

    fetchStores();
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        {stores.map((store) => (
          <Grid item lg={2} xs={3} md={2.4} sx={{ mt: 10, mb: 10 }}>
            <Card sx={{ maxWidth: 345 }} key={store.store_id}>
              <CardActionArea component={Link} to={`/store/${store.store_id}`}>
                <CardMedia
                  component="img"
                  height="140"
                  image={store.store_profile}
                  alt={store.store_name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {store.store_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {store.store_detail}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}{" "}
      </Grid>
    </div>
  );
}
