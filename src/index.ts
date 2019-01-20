import { fizzbuzz } from './fizzbuzz'

const fizzbuzz_process = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(fizzbuzz(i))
  }
}

fizzbuzz_process()
