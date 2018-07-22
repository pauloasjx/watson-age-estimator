npm --prefix ./api install ./api &&
npm --prefix ./web install ./web/ &&
npm --prefix ./web run build ./web &&
cp -R ./web/build/* ./api/public &&
clear &&
npm --prefix ./api run start
