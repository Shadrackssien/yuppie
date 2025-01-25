const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTZmM2U2ODI3ZWQ4YzU4NDRhMTIwZTY1ZGNmNDQ0YiIsIm5iZiI6MTczNjg2NTg1My44LCJzdWIiOiI2Nzg2NzgzZDYyZThmYTYyOWRiYjE2NTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.k8CavkpXHO0igT4mttqCIFfAzbwZVTvDm63WeTKdSOM",
  },
};

fetch("https://api.themoviedb.org/3/authentication", options)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
