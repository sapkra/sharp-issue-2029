# Example for sharp issue 2029

https://github.com/lovell/sharp/issues/2029  
https://github.com/fiahfy/icns-convert/issues/2

I can be fixed by changing the import order so that `sharp` will be imported before `icns-convert`.  
I think the main problem is that the libraries are using different versions of `sharp`.

```console
$ yarn list sharp    
yarn list v1.21.1
├─ @fiahfy/icns-convert@0.0.8
│  └─ sharp@0.23.4
└─ sharp@0.24.0
✨  Done in 0.14s.
```
