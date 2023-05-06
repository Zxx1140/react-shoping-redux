import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  CssBaseline,
  Grid,
  Button,
  Stack,
  Typography,
} from "@mui/material";

export default function Productid() {
  const { product_id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${product_id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [product_id]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: "80px" }}>
        {product && (
          <Card variant="outlined">
            <CardHeader
              title={product[0].product_name}
              subheader={`${product[0].product_price} THB`}
              sx={{ textAlign: "right", backgroundColor: "#DBDFEA" }}
            />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={product[0].product_img}
                    alt={product[0].product_name}
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product[0].product_detail}
                  </Typography>

                  <CardActions sx={{ justifyContent: "flex-end", mt: 40 }}>
                    <Stack direction="column" spacing={2}>
                      <Typography variant="h6" component="div">
                        {product[0].product_price} THB
                      </Typography>
                      <Typography variant="h6" component="div">
                        Total {product[0].product_total}
                      </Typography>
                      <Button variant="contained" color="primary">
                      Add to cart
                    </Button>
                    </Stack>
                  
                  </CardActions>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        )}
      </Container>
    </React.Fragment>
  );
}
