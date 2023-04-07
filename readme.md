# expo-leaflet

A [Leaflet](https://leafletjs.com) map component with no native code

# Forked by Andy Lee

- Tailored feature automatic "flying to" on zoom change (prevented). Now give a specific trigger prop in order to call this method.
- Expo-Leaflet RN Components styles are now customizable.

# Build

- Use Node version 16.20.0

/expo-leaflet
```bash
yarn build
```

/expo-leaflet/web
make sure there is a folder called `node_modules_temp`
```bash
yarn run iterate
```

# Run demo
- Use Node version 18

../demo
```bash
yarn run iterate
```

Run demo
```bash
npx expo start
```

Using a virtual machine
```bash
npx expo start --tunnel
```

## Documentation

Check out [readme.md](./expo-leaflet/readme.md) in the `expo-leaflet` directory.
