import { Container, List, Typography, ListItem } from "@mui/material";

export default function({items}) {
    return (
      <Container>
        <List component="ol" dense>
            { items.map((item, idx) => <ListItem><Typography>{`${idx + 1}. ${item}`}</Typography></ListItem>) }
        </List>
      </Container>
    );
  };
