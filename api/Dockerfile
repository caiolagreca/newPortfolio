# Etapa 1: build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copia o csproj e restaurar as dependências
COPY *.csproj .
RUN dotnet restore

# Copia todo o resto do código
COPY . .

# Publica a aplicação em modo Release
RUN dotnet publish -c Release -o out

# Etapa 2: runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Copia o resultado da publicação
COPY --from=build /app/out ./

# Define a porta que seu aplicativo vai rodar, por exemplo 8080
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

# Comando para iniciar a aplicação
ENTRYPOINT ["dotnet", "api.dll"]
