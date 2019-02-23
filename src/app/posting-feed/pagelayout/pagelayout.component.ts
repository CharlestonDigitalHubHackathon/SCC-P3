import { Component, OnInit } from '@angular/core';
import { Posting } from '../posting-card/posting-card.component';

@Component({
  selector: 'app-pagelayout',
  templateUrl: './pagelayout.component.html',
  styleUrls: ['./pagelayout.component.scss']
})
export class PagelayoutComponent implements OnInit {

  postings: Posting[] = [
    {
      name: 'Corn',
      quantity: '12 ears',
      description: `Out in the field when the first has been born Folks sing a song, song of the corn Late in the day when the secrets are sworn Folks tell a tale, tale of the corn I heard a commotion one late afternoon Someone was singing a funeral tune As I lay watching them hoist up the cross Something was burning, something was lost Could you believe what the scarecrow had seen Folks come to fall down to their knees Rumours of strangers been buried alive Black bats and ... send chills at my spine`,
      datePosted: new Date(2019, 1, 19),
      dateEnd: new Date(2019, 2, 30), 
      price: 1200,
      imageUrl: 'https://cdn.britannica.com/s:300x300/36/167236-004-AE764A76.jpg', 
      distance: 2,
      farmerId: 2
    },
    {
      name: 'Beef',
      quantity: '2 slabs',
      description: `Out in the field when the first has been born Folks sing a song, song of the corn Late in the day when the secrets are sworn Folks tell a tale, tale of the corn I heard a commotion one late afternoon Someone was singing a funeral tune As I lay watching them hoist up the cross Something was burning, something was lost Could you believe what the scarecrow had seen Folks come to fall down to their knees Rumours of strangers been buried alive Black bats and ... send chills at my spine`,
      datePosted: new Date(2019, 1, 19),
      dateEnd: new Date(2019, 4, 30), 
      price: 9000,
      imageUrl: 'https://assets.vancouverisawesome.com/wp-content/uploads/2018/08/08111846/cows-edit.jpg', 
      distance: 4,
      farmerId: 3
    },
    {
      name: 'Eggs',
      quantity: '40 cartons',
      description: `Out in the field when the first has been born Folks sing a song, song of the corn Late in the day when the secrets are sworn Folks tell a tale, tale of the corn I heard a commotion one late afternoon Someone was singing a funeral tune As I lay watching them hoist up the cross Something was burning, something was lost Could you believe what the scarecrow had seen Folks come to fall down to their knees Rumours of strangers been buried alive Black bats and ... send chills at my spine`,
      datePosted: new Date(2019, 1, 19),
      dateEnd: new Date(2019, 3, 20), 
      price: 12000,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKy0jHEpYj3ZGeihJPADlAwNSTMv0FhgexCWK553xFPn8xY77NZA', 
      distance: 14,
      farmerId: 2
    },
    {
      name: 'Frog legs',
      quantity: '90 sets',
      description: `Out in the field when the first has been born Folks sing a song, song of the corn Late in the day when the secrets are sworn Folks tell a tale, tale of the corn I heard a commotion one late afternoon Someone was singing a funeral tune As I lay watching them hoist up the cross Something was burning, something was lost Could you believe what the scarecrow had seen Folks come to fall down to their knees Rumours of strangers been buried alive Black bats and ... send chills at my spine`,
      datePosted: new Date(2019, 1, 19),
      dateEnd: new Date(2019, 2, 30), 
      price: 6000,
      imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUQEBAVFRUVFRUXGBgXFRUVGBoYFhYXFxYXFxgYHSggGBolGxgYITEhJSorLy4uGB8zODMsNygtLisBCgoKDg0OGxAQGy0lICYtLys3KysvLTYtKy0uLi0tLS0vLystLS0tLSsrLTUtLS0tLS0tLS0uLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQUGAwQHAgj/xAA7EAABAwIEBAQDBgQHAQEAAAABAAIRAwQFEiExBkFRYRMicYEykaEHFEKxwdEjYuHwJDNDUnKS8RWC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EAC4RAAICAQQBAgMHBQAAAAAAAAABAgMRBBIhMUETUSIyYQUUcZGhsfAjUoHR4f/aAAwDAQACEQMRAD8A4xCE0IBKcwpv3mi+2Pxt89P23H99VBrPY3TqNRtVm7T8+oXJLKJRZruaQYIgjcKRwbGatq7Mx2nNvJbHEVJhLbikfLVEkdHc/wC+yhUWJLk40dgwLiOjdtiYdGrStbHOF2VQSwBcsoV3U3BzHEEcwr5wxxmDFOvoTz5FZbKWuYlbiVXGMBqUCTBLevRRC7hXtKdduhCoXEHChBL6Yg9OSlXf4kdUvcpiF7q0y0lrhBC8LUSEhNC4AQpLBMEr3bstFsx8Tjo0ep69lP1/s6umiW1Kbj08zfqQqLNTVW8TkkzmV0VCnTc4hrQXEmAACST0AG6s9vwDfObmqeDQnlWqtY73aJI91deDuHPuFJtR7Abmo3M8zJZTIltNhGziNSRrqAs9XEYrGidDlnYaiYifX81iv+0MSca1nHk9DT6GVq3N4Rz+/wCBL+kzxW0216Y3fbvbWA9Q3X6Ksrt9G3e1/j2z/DrNG/4Xga5Kg2c099uUKM4m4Oo4lTZiVpFB1QubXYRIbUbo7bnI35ggqen+0I2Rbl47+n/CrU6aVL55RyNCvR+zl8D/ABTZ/wCBj2MoqfZrXjyXFNx6Frm/XVW/f9P/AHfv/oyZRRUKxXnBWIUgSaGYD/Y5rvcDf6KvvYWnK4EEbgiD8itMLYT+Rp/gdPKE0KYEmhC6AQhBQAhCaHQQhCAE0IQDQhNAMpIQuHASTQgESYidEk0kAkIQugsfD3FNS3Ia+XM+oXSLW6o3bAQ4ElcUUjg+MVLZwLTpOoWe2nPMSLReeJOGM/mIg8iFz7ELF9F2V49D1XWcA4io3TYJ1jUHcLDjuBNqDMGhwhUQslDhkU2jkSFL4vgr6Jlvmb9R6qX4X4SNWK1eWt0LW7F3d3Qdua0yvhGG5sk5Jcsv2C4T/wDOtKLHtDajwXv1BJLtRMdoCzUn1Kjg0aTJ+QJ/RZ6diHQ6o8kgaD4jA2kk9dFgw4VA/MDlDm8tpLXHfppHz9T4061ZPfJcGacm5NomTesD/M0aF+o1J2gSeQAVFxhpbfUKhmKgqsPY6PH5FSdS9NMlrtNSWa7h0ktM7GZWs6pnLXTOXUSNiWkGPYlZ904yeenn9T6fSuM64yi/b9C0W9wzwRT8NucOkPgSWkbHnuvHAdyCcQpbsFZjmztmcHB0f9Aq7d4u2gyZlx2G5JPIe6kuBbapSpudVaGuqOzRu4k8yflA13PVWafNcZWWeVhfUz/aE4qO3znJajaUwJcGknfymemnmK1rii1rgQImY57evqvDLlxMVPKQSNZykAkSD7c4Kz1qZeAM2siI5dDHMcvRVSSlw1/k8Zv2NV1MjdaV9hNvXEVqVN//ACaCfnupfD3PLjENfTHmBI1677gj814uKOsgN0Ow585jp2Wf0JJbotpnclMv+ALF4IYDTdyLXEx/+ToqRivAt7RP8NnjNnQs+LtLf2ldouK5eB/DY0D/AGNhYmBaqdZfU8bty+o3YPnm5tn0nGnVY5j26FrgWuHqDqFjXeOI+G6GICawPiAQ2oD5wBsJ5jsVyXivhirYVMrpfTMZamWAerSJMOH1XtafWQt46ZJSTIBCaFrJCTQhACEQnCAAmhCAaaSEAIQhACEIQAkmkgFCS9JIBITSQGezun0nB7DBH96rpHC3FrasU6nldG3I+i5gvTHkEEGCOarsqU/xONZO508GoVXGpIgCSIn3jn6IY5hMU9W6Q7TWRrI3a4GdDOiqP2e4w+4c+hU1IZM9dQPnqrvb4c2kSc4AMSDGkfr/AHC8rUVN8Y5KJcPo92x0hx0AP11OnNKowODWuHw68+kEwIB7/wDqyE09sw+X99VjfcsH4hPT9upWeO+KwmQNC9sXVZL6TaoEmCcsEnlB15H27Sox+BjlTumg8m1WRtuMzSe+6srKrnasbUI7McfyC220bh8H7uQdpJAn2J0+S6vV8Fte+PTZXsPwJrDmbQDXA/HUeajvUchz1Cm6NE/idOg37a/qRGm68XtV9L4zTbt+Kf0WqLzPtWzdm0z+oMKDpnN/Ede5vklTVyjXbTnG5ggE7rLSqifhcNQJ1kk845f3otGm9zAXZC07guMkjTSNxrqsDS+oRmLt+c7aRr2gK+rSPwvzO7WSF7V2qUwDUZ6DM2RLTJ9/VbNj/iBmpiZ7xBnY9wtY0WU25i8B0cyTPoNp5LVtqdyHGtQa8B0yA2Qep159xutS0WfI2vJY6OBf7nAb6b/stn7lQazI/LIHxeUHTSVXKdG9hz3VYDROUCZkAzzkR02VcpeJWrubULtAM2w9B6kQVb90hXFt9EXNLjBf2W9m5uUVBM/Fmg+nSFpXmDWtzRqW9VzXh3wnp01HPutShZMaJIgAa8+/7BOpdQBHliI7zvPfZYXZWnlI7uS8HDOMOFK+HVix8vpk+SqAcrgdgTsHdlXl9L8Q4e3EbN1q6Q55aQejxqw99Z9l83XFB9N7qbxlcxxa4dHNMEfNetTPfHJYnkwpoQrToIQhANCSaAaEpRKAaEkIBpIQgGhJNAJCChACEIQCKSaEBJcOYmba4ZUzEMkNqQJOQkZoHUb+y6g3F8NcBUF45w6MYQ4a7EO2PsuOIhVWUxm8sYjnlHZGcRWv+laOeeRfVJHuAYWccRXrQPAsqVP/AI05J+ULkmE4tUtz5TLTu07LsHBWJ+JS8d7D4ZEAkcxvHbustkPT8ce51zUekQ9TizEictSoaZnYUww/ULdbfV3CalR7vV5A+QhZru6N4KjWAAN80zqBr81Xr7yQ0b7BZ1qkpYwenHS7ornn2JoXgmQGT1In6lbtriIJy+J/1EfkqRUv61LVwDh33Ujw9jLbt7qTKYa9onfcc4WyuaksozW1em8MvlhX1MgHup5hZl1aCVRm16rBq06dIUlZY07QFp37KasiUup9lhFBh1Ag9dFHXtKqDoQR01iPMIMa7H8ls0LrNBcxw25T+SMUu2UWyQ8mDpEbDurFL2KnHwaT8cuGAwZOgAOu+gAC07KkGA65nOMudOpP6AdPRR9tXfVJqvaWh2jRuA2d9t+6lbakfbYleV9paty/pxKFHDN3xXkRPln1E7SY9UqlGfKBoP11TAPLTcdj6Lfs6IHmcYa0FxJ2AAklYaoub2nWsmarT8Gh4hEuaWv6k5Tt9SuOfbNhTad6Lqn/AJd0wPEcngAOB7xB+a6jTxOne0rmrl8jAWUzB+ECQY6k6/JVr7RreMIFJ7Qage2s3qxg0PpInRfSwgoQUSUeHjwcTXlMpKRYNJCEAIQhANCSEB6QkhANCEIAQhCAEIQgBCEIBITSQCQnCIQCXUeDcYp1LNtvmh7BlLecciOy5cslGq5hDmuLSNiFRqafVhtTwydclGWWjr1ph5oNe4mM4HPoVuHBSf4jmiREd/RQeE4oLqgHA+aIcOYI3U3bYq4BgfIDBuBuAvnMbZtTzno91ZcVKHkr3EuHvNN5AgtE/uqNZCvQqNrUZzNMiJ16gjmCr9j+Om4f4dNpax8B7uoHIKR4ewClUzPDto5CRodl6mlc6q2uzzdVNWWJdHvBcXfcNDqlMU3Rq0n6hbzyCfK31JWH7iyi4vcQQPhB5nqeyksEoeKPFfqTrrEAHZoH1VE7rLMxjwy5111R3vlGSnX8FhqOYco/2mdPRRmIYq+6IpsYWtB1mdp1E+qtxtWgRA9tp9FF07NjHOGwc6R29+Xf19VdC6cI4byebbZGXyrBr0qeVsbRHpoB1UhSpkAH1/ePqsTqRkNI2GvQ7bSJ/wDVu29q5xhoheaoynNspSHbW5doN5UPxTieZhs6BnYVXAnX+Qde/wAuqk7+9y/waWYN1FSqASR/Izv+y9cO0LFhzMJc4a5nx6iANF7WkoVXxPsOL8GThag2ytS+58odqGkdOo6kRp2VQu7h1/Wc2p/qnJHRp0j2CneMb6m+A2qXnps1un5qArXLcPt3XdYQ94LaDTvJGr46Abeq9KL4cn2yLWXtRyS9wW4o6upOyyQHASDHpso9XLhrHKhqPLySHEuI6SrJiHD9ldN2FOo7zB7QM099YPoVnlKcOWsr3RPfh4ZylCsHEfCdeyAeYqUj/qNGgPR41y+uyr6nGSksomJCEKQGhJCA9ISTQAmkhANCSaASaEkA0JJoAQhCAEFCEAkIC38Jwe4u3FlvTLyN9gB6k6BcclFZZ1Jt4Rr2d5UonNTeWntz9Quo8H4fcXFp49d4ioTl0jyjSfcrnmKcOXlqM1a3e1u2aMzf+w0HuupcHYm2phbGNIBYC09i1ZroV2JPh/Un6ttPCeDnmKU61Cs6Hc/URKtfBV09wNQuLfMGwNjGsn5rDQtG1anmbmJMAdSVNmwFvpAAPTqsutajXhd+DVp4b7FJrP1MPFF/lD3gahugA/Rb3BeNZqNNzhLcjg5oMHOHAT8gdO6i8QjXMFG8HuLnVWDRgqSw/wAx+IemgWHTv4HJ9+5frF8CjH8jqNhj1nVJpiu2RoWvIY8dJB3I6rZqUspBOV38wjXoVR8S4Yp3elZobUA8r9IPQO6juof/AOPVs5pue4ECYJzDXaOUFaV6c1weXLb5Ol3eJWtEZq1RrBECTJOkxH6KLHFdOuCyhIZAkQA4iNT7dFyi7tKjani6uBOsmT7dPRT2EXFN2xgjcHQjda4RUeUShsfR0azDcukST1O4Gp9wtJlBrXucGhsuBAnQBsZwW/i581oW18QPM6Zk666/0j6rVxnFw3Y6gk7xMNjQgTzVu4nsyaeKY5b2zvEqDxnScjJAYGhx1dE/Jc94ixm4xGvndryDRo1o6AcllxslztOfLfspfAcPbTaCQCeZWmtblkzzWw2OFcEbS/iPOZ0THLsFbrAGq7LpqR/4oiiw+nJb9u7wzpy1nnKjaltwihttlptLdjgQ+m1zSCHAgEEbEEbER1XHvtO4QGG3ANKTb1wX0jGjT+KnPbQjsexXVsIv5JB33iN/7K1/tLo0rjDK3iaGlFVhO7XjQAf8gS33WSp7GTi8PB8+lCChbi4EISQHpCSaAaEk1wAhCEAJoQgEhNCAEIQgBCF6psLiGtBJJAAAkknQADmUB5hdc+yupTFmcsZ/Ffn68ss+0LWwH7O6NJgfeS+od2AwxvYx8R+ilanCtBuZ9rnt3kAE0nQNP5D5SvL1GqhNbVn8f5yejp9PKL3Mm8UYKtCrQcfLUaQ4djz9lzDAb2phF063uNaTyNeX8tRv5FX/AA21exkVaniOBBDiMpLeQdGh5pcS2NC9a2hVp6n4S2Jb/M0/pzVNF65T6LdTpt8cLswsosbcU67YLCdxt5gQPzUlxfD6YqMpw2QHEcv2nZVXhzD7yzrfdakVLfcPJjL2jeeyvdRmdr2gtIG42zaBWWSUpJJ+CjTxnXFqS6KFipaG5nwQ6Y1kwOq0uGbOp/FqUxLRHlHMz+E9QJPsrHe4XTMkAAzBHZT9hbsZTaKbQ1jW7Dmf69VZZTGK295FVjs59iu2GPCcrpkbzMiFDcScQeJUb4YMsaQZ2MmRv0/VbnGN/Rp3bcjZBaDUP4sx5H6KCq39Gofw89DoY5KFWijD4lnkrve/jGDYo3AePNMkazr7latS1DjLZB1iND8wsdQNAmm6efKdN/VSeDYdVrU3VfhaDlk8z2ClPNay+jEqpuWEiNpYhVpaPcTB30+SzUb59YHIyY2J0G8wplnD7d3+bb09hzXq8DWZaTG+Z2wG8DckLPLV7niPZ62m088f1CCtcPIcH1jmP8uoA7KyWttTyyCCOx/MKUtMNDKWeNSdPTqvdrhQeRIAB5xqesK+jX2Z2Sjx7lOq0taTmmaVOi52jWncAaanlp7qsYlxjTt6rqYpPe5hLXSQ0ZgdR3gyF2K0wOiwN5lpDgfrHovn/wC0iwNDErlhbGZ/iD0qAO09yVvjLc+TzYxJm3+0Kmwk/d39hmafr/RQnE/GNxfNFIjw6QIJYDOYjYuPbp/SK2kpqEU8k9qBCEKZ0EIQgPSEBNcAIQmgEgJoQAhCEAIQhAJNJCAatH2b0yb5jxTc/IHGWj4CRDXEnbmqsutfZVRY2ze8RmfUdm6+UANH6+6zaue2p/Xgv08czRYcYpXj2TbOptIcMxeCRHTRalBteSK7WNB2yF+p7Zh+qmaDo1lZb1lNoYTWkgSByB915K0++PHj8z1PWVcuSDq0q/4G5o0giPeV6LQ9waxzmvadjG/bqEsR4xsaHlfcAvHJoL/nlWnZYtRugX03NqOJ3aYc0d27q16VxWTn3tSeCfoW7aoLa8sqDRpHMg7z0Ue59WjWeyoYOX5xsfzWxRvwGBhAMGc34v6LxeUzVbnLpLTAneOY9Oai+PxEZPOH0adC8Dm5njRoOYxpojGqpp0x4dUZnt07DuFkw22L5aBPL2WtidlWzkVGNLPwObIIHQjmr9OvUa3cpFGql6Kfp+f5kpFZhLiahlxMknmeqjbqgJ6q039u5kh7cw6qtXdMgy3Yr1cYMEJ7uzRdh+f4DDuWsA/sVfuE8QdUtmUnuOamS1zTyM7n1HNVjD6Gb1U6cG+8NgPNKsB5KjSRPRro3Cy6vTfeK9qeCdVvoT3NZRKY5i33Zgq55cNGs2k8gFFYFVdUqOuagLS8zH8vOO3JVmwwC8qXOWtINJzcxeSe/lneQr2+1yw1uhOg0XkXQhp4+mnmT7Z62nk7nu6X7kn99bUJkQymwn3A0J+q3cPuC4sMRImJ2B2+irmFue9rmwAMxbmnVwB109FNX9dttSNwT8Ra1o78vaBPspUqXcjFr7Y59OPgl7/jEUD4bKJeWTm2HsJ3cuK/aFj33+8dX8N1MBjaYa4Q6GzqR6kq6NrB3mJBJMnf136rHiWE0qw/iMBEaH8QnoQtlOoUX8SPKVvucqSVpxXg6ozzW7vFH+06PHpyd+arD2FpLXAgjcEQR6hejCcZLKLE0+jyhCSmdGhJCAyQhCFwAmkmgBKE0IBJoRKAEIQgBCEIAUlgmPXFm4mi+A74mkS0x1HXuo1eVyUVJYZ2MnF5RZ7/AI5varcoc2nrqWDU+5lQd3iVet/m1nv9XGPlstUIhRjCMekSlZKXbAL3SrOYQ5ji1w2IJB+YWMpSpkCx2XGV0z/MIqj+ca/9grXhXH1B4y1Wmn66j2cP1XMUKEq4vwWK2S8neMIxW2OtOs09RIKtFKvSqgB0D1/dfMDHEGQSD20U1h3FV5QjLVJA5O1UIU7PlJTt3/MfQF1gjHjQAgqnY3wiBq0Rz0Cr2Efag9pHitc3qWmR8irlY8f21cauYfU5D8lPc/JUuOiq2uEOaYc3XqP1Cm6NoQBMqxUbq1qajQ+xH0W2TbkaPZ36/JFPB2Usor13ScGteW76SecbStQlxD3wJFN5E7TBMrW+0DjKjQpm2t3TXJaSQAWtaDJk9T0VExDjm5q0jSaxjMwhzmyTB3idl4+p0Fll++PTfJ6Gl1ca6tsu0e8L4uyiKgI3+HXfda/EfE5uDTayQynJ10zOPOOw0VbSXqR01cZbkYrLXP5ix2GNHTX2VmssXB1nTT6coK5stq2vns0nRV26VS5iZpQydUbXa8RMaDcfULFf4Tb12/4inmMANc0w4dwQNvWVS7DG40n9FaMPxkEAT17/ACCxuM6nkracSr4lwfXZJofxQPw/DUA/47O9vkq29haS1wII3BEEeoOy7FTumHIR5XDdY8Ww2ldf51EVBsHN8rwTya4axpsZWqvVcfETjZ7nIEK3YxwPUYZtX+K07NdDantOjvaD2VVuaD6TiyoxzHDdrgWkexWyMlJZRYmmeUIQpHRyhJNcAIQgIATQhAJCaEAIQkgGhCEAJJoQHhyS9OXlANCSF0DQkhcA0JJroNm2xCtT/wAuq9vo4rNVxy6d8VxU+cfko9C5gHpzidSZJ5rymkugEIQgBCEIAW3bX72bFaiFxpPsFswzF/ISXiQQMp31HJWDDceILSHxHaesH6rmaz0Lp7DIKyz0qfMSDgvB15l1SqNOaGk9P2T+7Z9XAujSZB0G2+y51Y46Z10/JTdLG2x8Ue5HusrrnFkNuGUVNCF6pcCEIXACAhCAaSaEAIQhACSEIBhCEIAQhCA8uXlCF0AhCEAIQhACEIQAhCEAJpIQAhCEAIQhACEIQAhCEAL22s4cyhCA/9k=', 
      distance: 19,
      farmerId: 2
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  expand(post: Posting) {
    this.postings.forEach(p => p.isSelected = false)
    post.isSelected = true;
  }
}
