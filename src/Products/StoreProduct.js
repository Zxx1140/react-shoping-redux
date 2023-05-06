import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useParams } from "react-router-dom";
import { Stack, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function StoreProduct() {
  const { store_id } = useParams();

  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/store/" + store_id)
      .then((response) => response.json())
      .then((data) => setStores(data));
  }, [store_id]);

  return (
    <div>
      <Container>
        <Stack
          direction={"column"}
          sx={{ marginTop: "20px", textAlign: "center" }}
        >
          <Typography
            sx={{
              fontSize: { md: "20px", lg: "40px" },
              background: "#b27765",
              color: "White",
            }}
          >
            {stores[0]?.store_name}
          </Typography>
        </Stack>
      </Container>

      <Grid container spacing={3} sx={{ mt: 4, ml: 4,marginBottom:'20px' }}>
        {stores.map((store) => (
          <Grid item xs={3} md={2.4} >
            <Card sx={{ maxWidth: 345,boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }} key={store.product_id} >
              <CardActionArea
                component={Link}
                to={`/product/${store.product_id}`}
                sx={{
                  "&:hover": {
                    backgroundColor: "#ffab91"
                  }
                }}
              
              >
                <CardMedia
                  component="img"
                  height="350"
                  image={store.product_img}
                  alt={store.product_name}
                  
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textTransform: "uppercase", textAlign: "center" }}
                  >
                    {store.product_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textTransform: "uppercase", textAlign: "center" }}
                  >
                    {store.product_price} THB
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
