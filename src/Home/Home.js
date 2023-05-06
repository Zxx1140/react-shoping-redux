import { Banner } from "../components/Banner";
import Store from "../Products/Store";
import Footer from "../components/Footer";
import { Typography, Container, Stack } from "@mui/material";
export default function Home() {
     
  
    return (
      <div>
        <Banner/>
        <Container>
        <Stack
          direction={"column"}
          sx={{ marginTop: "20px", textAlign: "center" }}
        >
          <Typography sx={{ fontSize: { md: "20px", lg: "40px" } }}>
            {" "}
            WELCOME
          </Typography>
          <Typography sx={{ fontSize: { md: "10px", lg: "20px" } }}>
            {" "}
            TO
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "20px", lg: "40px" },
              background: "#b27765",
              color: "White",
            }}
          >
           SHOP
          </Typography>
        </Stack>
      </Container>
      
        <div style={{marginLeft:'50px',marginTop: '50px',marginBottom:'50px'}}>
        <Store />
        </div>
      
  <Footer/>
      </div>
    )
  }